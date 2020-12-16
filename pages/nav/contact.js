import Layout from '../../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1 className="text-2xl font-bold sm:text-4xl">Contact me</h1>
      <p>
        <a class="default" href="mailto:hello@minus99.com">
          hello@minus99.com
        </a>
        <br />
        <a class="default" href="tel:0090123000">
          +90 (123) 000
        </a>
        <br />
        Worldwide 
      </p>
      <small>CCreat © 2020</small>
    </Layout>
  );
}
