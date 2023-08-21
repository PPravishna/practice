import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AlertMessage, AutocompleteCombo, CardUiControls, Css_Container, Floatingbutton, Fragments, HookIntro, ListCustom, Mybuttons, ProgressLinearColors, PropsConcept, SliderMusicPlayer, StarRating, SwitchCustom, WovenImageList } from '../../components';
import { MyEvents } from '../../components/events/MyEvents.com';
import { MyCondition } from '../../components/conditions/MyCondition.com';
import { MyForms } from '../../components/forms/MyForms.com';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Lessons:React.FC<{}>=()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="fragment" />
          <Tab label="components"  />
          <Tab label="Props(Gifts)" />
          <Tab label="Hookes" />
          <Tab label="Strict-mode" />
          <Tab label="5-ways-of-css" />
          <Tab label="Events" />
          <Tab label="Conditions" />
          <Tab label="Forms-Formik" />

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Fragments/>
      </CustomTabPanel>



      <CustomTabPanel value={value} index={1}>
        <h1>Buttons</h1>
        <Mybuttons/>

        <h1>Floating buttons</h1>
        <Floatingbutton/>

        <h1>Star Rating</h1>
        <StarRating/>

        <h1>Woven Image List</h1>
        <WovenImageList/>

        <h1>Cards UI Controls</h1>
        <CardUiControls/>

        <h1>Alert Messages</h1>
        <AlertMessage/>
        
        <h1>Autocomplete Combo Box</h1>
        <AutocompleteCombo/>

        <h1>Slider Music Player</h1>
        <SliderMusicPlayer/>

        <h1>Switch Customization</h1>
        <SwitchCustom/>
        
        <h1>List Customization</h1>
        <ListCustom/>

        <h1>Progress Linear Colors</h1>
        <ProgressLinearColors/>

        </CustomTabPanel>
    
    
      
      <CustomTabPanel value={value} index={2}>
        
        <PropsConcept/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={3}>
        <HookIntro/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={4}>
          <h1>Definition-----Strict-mode</h1>
      
        </CustomTabPanel>

        <CustomTabPanel value={value} index={5}>
        <h1>Different ways of css in react</h1>
        <Css_Container/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={6}>
        <h1>Events</h1>
        <MyEvents/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={7}>
        <h1>Conditions</h1>
        <MyCondition/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={8}>
        <h1>Formik Forms</h1>
        <MyForms/>
        </CustomTabPanel>
    </Box>
  );
}