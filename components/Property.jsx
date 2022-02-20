import Link from "next/link";
import Image from "next/image";
import { Flex,Box,Text,Avatar } from "@chakra-ui/react";
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from "react-icons/bs"
import {GoVerified} from "react-icons/go"
import millify from "millify";
import defaultImage from "../assets/images/defaultImage.jpg"

const Property = ({property:{coverPhoto,price,rooms,title,baths,area,agency,externalID,isVerified,rentFrequency}}) => (

    <Link href={`properties/${externalID}`} passHref>
    <Flex flexWrap='wrap' width="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">

        <Box>
            <Image src={coverPhoto ? coverPhoto.url: defaultImage} height={400} width={260} alt="propert images"/>
        </Box>

        <Box width='full'>
            <Flex paddingTop={'2'} alignItems="center" justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
                <Box paddingRight={'3'} color="green.300">{isVerified && <GoVerified/>}</Box>
                <Text fontWeight={'bold'} fontSize={'lg'}>
                    AED  {millify(price)} {rentFrequency && `/${rentFrequency}`}
                </Text>
            </Flex>

            <Box>
                <Avatar size={'sm'} src={agency?.logo?.url}/>
            </Box>
            </Flex>

            <Flex justify="space-between" alignItems="center" p="5" width="250px">
                {rooms} | <FaBed/> | {baths} <FaBath/> {millify(area)} sqfts <BsGridFill/>
            </Flex>

            <Text>
            {title.legnth > 30 ? `${title.substrings(0,30)}...` : title}
            </Text>
        </Box>
    </Flex>
    </Link>
)

export default Property