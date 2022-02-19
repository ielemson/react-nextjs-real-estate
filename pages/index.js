import Link from 'next/link';
import Image  from 'next/image';
import Property from '../components/Property';
import { baseUrl,fetchApi } from '../utils/fetchapi';
import { Flex,Box,Text, Button  } from '@chakra-ui/react';


export default function Home({properyForRent,properyForSale}) {
  // console.log(properyForRent,properyForSale)

  const Banner = ({purpose,imageUrl,title1,title2,desc1,linkName,buttonText,desc2})=>(

    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
     <Image src={imageUrl} width={500} height={300} alt="banner"/>
     <Box p={5}>
       <Text color="gray.500" fontSize="small" fontWeight="medium"> {purpose}</Text>
       <Text fontSize="3xl" fontWeight="bold"> {title1} <br/> {title2}</Text>
       <Text  fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700"> {desc1} <br/> {desc2}</Text>
       <Button fontSize="lg">
      <Link href={linkName} >{buttonText}</Link>
       </Button>
     </Box>
    </Flex>
  )


  return (
    <div>
    <h1>Welcome To My Real Estate</h1>
   
    <Banner
     purpose='For Sale'
     title1="Rental Home for"
     title2='Everyone'
     desc1="Explore Apartment, Villas Home"
     desc2="and more"
     buttonText="Explore Renting"
     linkName='/search?purpose=for-rent'
     imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/179558505/00382359380f47efbf4d68c3ae91854c'
    />

    <Flex>
    {properyForRent.map(property=>(<Property key={property.id} property={property}/>))}
    </Flex>

    <Banner
     purpose='Buy a Home'
     title1="find ,buy own a dream home"
     title2='Everyone'
     desc1="Explore Apartment, Villas Home"
     desc2="and more"
     buttonText="Explore Buying"
     linkName='/search?purpose=for-rent'
     imageUrl='https://res.cloudinary.com/ielemson/image/upload/v1645173657/creative_movers/status/file/jw2tn7xkqd9plojfhktf.jpg'
    />
   
    <Flex flexWrap="wrap">
    {properyForSale.map(property => <Property property={property} key={property.id}/>)}
    </Flex>

    </div>
  )
}

export const getStaticProps = async() => {
const properyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
const properyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

return {
  props:{
    properyForSale : properyForSale?.hits,
    properyForRent : properyForRent?.hits 
  }
}
}