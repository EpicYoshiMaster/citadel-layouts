import React from 'react'
import styled from 'styled-components';

interface BackgroundProps
{
	backgroundColor?: string;
}

const BACKGROUND_PATH = '/bundles/citadel-layouts/images/backgrounds';
const DEFAULT_COLOR = "var(--bg-color)";

export const Background: React.FC<BackgroundProps> = ({ backgroundColor }) => {
	return (
		<StyledBackground 
		$backgroundColor={backgroundColor ? backgroundColor : DEFAULT_COLOR} 
		src={`${BACKGROUND_PATH}/Flyer_bg.png`}
		$size='50%'/>
	);
}

const StyledBackground = styled.div<{$backgroundColor: string, src: string, $size?: string}>`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;

	background-size: ${({ $size }) => $size ? $size : '10%'};
	background-repeat: repeat;
	background-image: url(${props => props.src});
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	background-attachment: scroll;
	
    //animation: scrolling 240s linear infinite;
	//
	//@keyframes scrolling {
  	//	from {
    //	  	background-position: 1920px 1920px;
  	//	}
  	//	to {
    //	  	background-position: 0 0;
  	//	}
	//}
`;