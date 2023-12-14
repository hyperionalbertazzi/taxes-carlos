interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1> Contact form submission</h1>
    <p>
      Nombre: <strong>{name}</strong>, at {email}
    </p>
    <h2>Mensaje:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
