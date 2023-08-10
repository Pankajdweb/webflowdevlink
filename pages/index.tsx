
import {NavbarComponent} from '../devlink/NavbarComponent';
import { Herosection } from '../devlink/Herosection';
import { Capitalsection } from '../devlink/Capitalsection';
import { Sectionfeatures } from '../devlink/Sectionfeatures';
import { SectionFund } from '../devlink/SectionFund';



export default function Home() { 

  return (
    <div>
      <NavbarComponent />
      <Herosection />
      <Capitalsection />
      <Sectionfeatures />
      <SectionFund />
    </div>
  );
}