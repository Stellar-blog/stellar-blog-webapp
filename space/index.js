// import '../../configureAmplify'
// import { useEffect, useState } from 'react'
// import Head from 'next/head'
// import { API, Auth, withSSRContext } from 'aws-amplify'

// import { listSpaces } from '../../src/graphql/queries'
// import NavBar from '../../components/PrivateNav'
// import SpaceMenu from '../../components/SpaceMenu'
// import {
//     DashboardMain,
//     FlexBasicContainer
// } from '../../styles'

// function Space() {

//     // const [isOwner, setIsOwner] = useState(false)

//     // console.log("isOwner : ", isOwner)
//     // console.log("space : ", space)

//     // useEffect(async () => {
//     //     const user = await Auth.currentAuthenticatedUser()
//     //     if (user && user.attributes.sub === space.userId) setIsOwner(true)
//     // }, [])

//     return (
//         <>
//             <Head>
//                 <title>Stellar blog</title>
//             </Head>
//             <DashboardMain>
//                 <NavBar />
//                 <FlexBasicContainer>
//                     {/* <SpaceMenu space={space} /> */}
//                     <section>Two Col</section>
//                 </FlexBasicContainer>
//             </DashboardMain>
//         </>
//     )
// }

// export async function getStaticPaths() {
//     const SSR = withSSRContext();

//     const spaceData = await SSR.API.graphql({
//         query: listSpaces
//     })

//     const spaceIds = spaceData.data.listSpaces.items.map(space => ({ params: { id: space.username } }))

//     return {
//         paths: spaceIds,
//         fallback: true, //Important!!! change it to TRUE!!! 
//     }
// }

// export async function getStaticProps(context) {
//     const SSR = withSSRContext();

//     const username = context.params.id

//     const space = await SSR.API.graphql({
//         query: listSpaces,
//         variables: {
//             filter: {
//                 username: {
//                     eq: username
//                 }
//             },
//         }
//     })

//     return {
//         props: {
//             space: space.data.listSpaces.items[0]
//         }
//     }
// }

// export default Space