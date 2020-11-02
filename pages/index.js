import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/Nav'
import {
	Main,
	Center,
	Button,
	Typography,
} from './styles'
import { AWS_AUTH_FORM_TYPE } from '../constants'

export default function Home() {

	return (
		<>
			<Head>
				<title>Stellar blog</title>
			</Head>
			<Main>
				<NavBar authType={AWS_AUTH_FORM_TYPE.NOTSIGNEDIN} />
				<Center>
					<Typography size="big">
						Stellar, your space
					</Typography>
					<Typography size="medium">
						Stellar is where you can create your own space and put whatever you want.
					</Typography>
					<Link href="/login" passHref>
						<Button>
							Get Started
						</Button>
					</Link>
				</Center>
			</Main>
		</>
	)
}
