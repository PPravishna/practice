import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NormalCss } from './NormalCss.com';
import { CSSwithJS } from './CSSwithJS.com';
import { ExternalCSSwithJS } from './ExternalCSSwithJS.com';
import { Styled_ComponentCss } from './Styled_ComponentCss';

export const Css_Container:React.FC<{}>=()=> {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           1. Normal CSS
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an Normal CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <NormalCss/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>2. CSS with JS</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           Iam CSS with JS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <CSSwithJS/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          3. External CSS with JS
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           Iam an External CSS with JS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExternalCSSwithJS/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>4. fourth Way</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Styled Component
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Styled_ComponentCss/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}