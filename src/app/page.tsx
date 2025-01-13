import Banner from "@/components/Banner";
import Contactus from "@/components/Contactus";
import Productgallery from "@/components/Productgallery";
import Services from "@/components/Services";
import Description from "@/components/Description";
import Aboutus from "@/components/Aboutus";
export default function Home() {
  return (
    <div>
        <Banner />
        <Description />
        <Services />
        <Productgallery/>
        <Aboutus />
        <Contactus />
    </div>
  );
}
