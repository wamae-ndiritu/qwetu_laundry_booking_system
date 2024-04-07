import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="p-3 bg-violet-500 text-white flex">
      <section>
        <WhatsAppIcon />
        <p>Whatsapp</p>
      </section>
      <section>
        <TelegramIcon />
        <p>Telegram</p>
      </section>
      <section>
        <FacebookIcon />
        <p>Facebook</p>
      </section>
    </div>
  );
};
export default Footer;
