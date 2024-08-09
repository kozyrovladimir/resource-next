import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {VscChevronUp} from "react-icons/vsc";

interface AccordionInfoProps extends React.ComponentProps<typeof Accordion> {
  title: string;
}

const AccordionInfo: React.FC<AccordionInfoProps> = ({children, title, ...props}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const backgroundColor = expanded ? 'none' : 'var(--color-bg-grey)';

  return (
    <Accordion
      onChange={(event, isExpanded) => {
        setExpanded(isExpanded ? title : false);
      }}
      // style below are to remove shadow
      elevation={0}
      // style below are to remove the default border
      sx={{border: 'none', ':before': {display: 'none'}, backgroundColor: backgroundColor, borderRadius: '10px'}}
      disableGutters={true}

      {...props}
    >
      <AccordionSummary
        sx={{width: 'fit-content'}}
        expandIcon={<VscChevronUp fontSize={26} style={{color: 'var(--color-main-black)',  margin: '8px'}}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography fontSize={'20px'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{border: 'none', ':before': {display: 'none'}}}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionInfo;
