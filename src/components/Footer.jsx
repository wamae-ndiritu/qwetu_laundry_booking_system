import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <footer className="bg-violet-500 ">
      <div className="p-3 text-white flex m-auto gap-2">
        <section className="flex items-center gap-1">
          <a href="https:whatsapp.com">
            <WhatsAppIcon />
            <p>Whatsapp</p>
          </a>
        </section>
        <section className="flex items-center gap-1">
          <a href="https://telegram.com">
            <TelegramIcon />
            <p>Telegram</p>
          </a>
        </section>
        <section className="flex items-center gap-1">
          <a href="https://facebook.com">
            <FacebookIcon />
            <p>Facebook</p>
          </a>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
