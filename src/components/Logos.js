import React from 'react';
import Box from './Box';
import { ReactComponent as Blogr } from '../assets/logos/blogr.svg';
import { ReactComponent as Coffeeroasters } from '../assets/logos/coffeeroasters.svg';
import { ReactComponent as Creative } from '../assets/logos/creative.svg';
import { ReactComponent as Crowdfund } from '../assets/logos/crowdfund.svg';
import { ReactComponent as Maker } from '../assets/logos/maker.svg';
import { ReactComponent as Mastercraft } from '../assets/logos/mastercraft.svg';
import { ReactComponent as Officelite } from '../assets/logos/officelite.svg';
import { ReactComponent as Pod } from '../assets/logos/pod.svg';
import { ReactComponent as Pomodoro } from '../assets/logos/pomodoro.svg';
import { ReactComponent as Scoot } from '../assets/logos/scoot.svg';
import { ReactComponent as Typemaster } from '../assets/logos/typemaster.svg';
import { ReactComponent as Vector } from '../assets/logos/vector.svg';

const companyLogos = {
  blogr: [Blogr, '#E54D25'],
  coffeeroasters: [Coffeeroasters, '#F2DECB'],
  creative: [Creative, '#4E1853'],
  crowdfund: [Crowdfund, '#37C790'],
  maker: [Maker, '#21427D'],
  mastercraft: [Mastercraft, '#1F1F1F'],
  officelite: [Officelite, '#2F4FC7'],
  pod: [Pod, '#132034'],
  pomodoro: [Pomodoro, '#4722C6'],
  scoot: [Scoot, '#E99210'],
  typemaster: [Typemaster, '#F16718'],
  vector: [Vector, '#34353F'],
};

export default function Logos(props) {
  const { logo } = props;
  const [CompanyLogo, color] = companyLogos[logo];

  return (
    <Box color={color}>
      <CompanyLogo />
    </Box>
  );
}
