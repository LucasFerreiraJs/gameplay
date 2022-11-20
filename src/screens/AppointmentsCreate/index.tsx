import React, { useState } from 'react'
import {
	View,
	Text,
	ImageBackground,
	ImageBackgroundProps,
	FlatList,
	ScrollView,
	Platform,
	KeyboardAvoidingView,
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { Background } from '../../components/Background'
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Smallinput } from '../../components/Smallinput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';

import { Guilds } from '../Guilds'
import { GuildProps } from '../../components/Guild'

export function AppointmentsCreate() {
	const [category, setCategory] = useState('');
	const [openGuildsModal, setOpenGuildsModal] = useState(false);
	const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

	function handleOpenGuildsModal() {
		setOpenGuildsModal(true)
	}

	function handleCloseModal() {
		setOpenGuildsModal(false);
	}

	function handleCategorySelect (categoryId: string){
		// categoryId === category ? setCategory("") : setCategory(categoryId);
		setCategory(categoryId);

	}

	function handleGuildSelected(guildSelected: GuildProps) {
		console.log('guildSelected', guildSelected)
		setGuild(guildSelected)
		setOpenGuildsModal(false)
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<Background>
				<ScrollView>
					{/* <Background> */}
					<Header title='Agendar partida' />

					<Text style={[styles.label, {
						marginLeft: 24,
						marginTop: 36,
						marginBottom: 18
					}]}>
						Categoria
					</Text>

					<CategorySelect
						hasCheckBox={true}
						setCategory={handleCategorySelect}
						categorySelected={category}
					/>

					<View style={styles.form}>
						<RectButton
							onPress={handleOpenGuildsModal}
						>
							<View style={styles.select}>
								{
									guild.icon
										? <GuildIcon />
										: <View style={styles.image} />
								}
								<View style={styles.selectBody}>
									<Text style={styles.label}>
										{guild.name
											? guild.name
											: 'Selecione um servidor'}
									</Text>
								</View>

								<Feather
									name="chevron-right"
									color={theme.colors.heading}
									size={18}
								/>

							</View>
						</RectButton>

						<View style={styles.field}>
							<View>
								<Text style={[styles.label, { marginBottom: 12 }]}>
									Dia e mês
								</Text>

								<View style={styles.column}>
									<Smallinput maxLength={2} />
									<Text style={styles.divider}>/</Text>
									<Smallinput maxLength={2} />
								</View>
							</View>

							<View>
								<Text style={[styles.label, { marginBottom: 12 }]}>
									Hora e minuto
								</Text>

								<View style={styles.column}>
									<Smallinput maxLength={2} />
									<Text style={styles.divider}>:</Text>
									<Smallinput maxLength={2} />
								</View>
							</View>
						</View>

						<View style={[styles.field, { marginBottom: 12 }]}>
							<Text style={styles.label}>
								Descrição
							</Text>

							<Text style={styles.caracteresLimit}>
								Max. 100 caracteres
							</Text>
						</View>
						<TextArea
							multiline
							maxLength={100}
							numberOfLines={5}
							autoCorrect={false}
						/>
					</View>
					<View style={styles.footer}>
						<Button
							title='Agendar'
						/>
					</View>
					{/* </Background> */}
				</ScrollView>
			</Background>
			<ModalView
				visible={openGuildsModal}
				closeModal={handleCloseModal}
			>
				<Guilds handleGuildSelected={handleGuildSelected} />
			</ModalView>
		</KeyboardAvoidingView>
	)


}

