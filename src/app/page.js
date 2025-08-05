import Image from "next/image";
import HomePage from "@/components/homepage/Homepage";
import JusticeHelpSecurityDashboard from "@/components/homepage/Justice";
import GrievancePortals from "@/components/homepage/GrievancePortals";
import ComplaintSection from "@/components/homepage/ComplaintSection";
import CommissionerMessage from "@/components/homepage/CommissionerMessage";
import WhatsappSection from "@/components/homepage/WhatsappSection";
import Kumbh from "@/components/homepage/Kumbh";
import PoliceStationLocator from "@/components/homepage/PoliceStationLocator";
export default function Home() {
  return (
    <>
      <HomePage />
      <JusticeHelpSecurityDashboard />

      <GrievancePortals />
      <ComplaintSection />
      <CommissionerMessage />
      <WhatsappSection />
      <PoliceStationLocator />
      <Kumbh />
    </>
  );
}
