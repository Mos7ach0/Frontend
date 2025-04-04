import {Image} from 'primereact/image'
import HeroImage from '@/assets/hero-image.jpg'
import Logo from '@/assets/Logo.svg'
import { Card } from 'primereact/card'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { ToggleButton } from 'primereact/togglebutton';
import { useState } from 'react'

const Header = () => {
  return (
    <div className = 'px-4 pt-6 flex flex-col md:flex-row items-center gap-6 md:gap-0'>
      <div className = 'mr-auto'>Found 234 countries</div>

      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'></InputIcon>
        <InputText
          className='h-[40px] !text-sm w-[100%] md:w-[309px]'
          placeholder='Searcg by Name, Region, Subregion'
          variant='filled'
        />
      </IconField>
    </div>
  )
}

/* const ToggleButton = () => {
  const [isToggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return(
    <button onClick={handleToggle}>
      {isToggle ? 'ON' : 'OFF'}
    </button>
  );
  
}; */



const Filters = () => {
  const sortBy = [
    {
      name: 'Name', value: 'name'
    },
    {
      name: 'Population', value: 'population'
    },
    {
      name: 'Area', value: 'area'
    }
  ]

  return(
    <div className="flex flex-col w-full">
      <label htmlFor=''>Sort by</label>
      <Dropdown
        options={sortBy}

        optionLabel='name'
      />
    </div>
  )
}

const Toggle = () => {
  const [checked, setChecked] = useState(false)
  

  return(
    <div className='flex flex-col'>
      <label htmlFor=''>Regiones</label>
      <ToggleButton 
        checked={checked} onChange={(e) => setChecked(e.value)}
        onLabel='Americas'
        offLabel='Americas'
        

      />
    </div>
  )
}
 
function App() {

  return(
    <div className = 'flex flex-col justify-center items-center h-screen'>
      <div className = 'flex flex-col'>
          <div className = ' flex justify-center items-center' >
            <Image
              src={HeroImage}
            />
            <Image
              className = 'absolute'
              src={Logo}
            />
          </div>
      </div>

      <Card
        className = 'w-[95%] border border-[#1A1C20] shadow-none relative bottom-[70px]'
        header={<Header/>}
      >
        <div className='flex flex-col md:flex-row md:w-[30%] gap-4'>   
          <Filters/>
        </div>
        <div className='flex flex-col md:flex-row md:w-[30%] gap-4'>
          <Toggle/>
          
        </div>
        
      </Card>
    </div>

  )
}

export default App;
