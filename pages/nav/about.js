import Layout from '../../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div className="min-h-full">
        <h1 className="text-4xl font-heading">About Lorem Ipsum</h1>
        <h2>Website content</h2>
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            quia dicta provident iste ea, libero saepe. Quisquam, omnis. Facere
            dignissimos quis ea accusantium nam qui voluptas! Incidunt
            aspernatur aperiam eius. Maxime ea, blanditiis tempore molestias
            corrupti assumenda quisquam consequuntur dolorem eaque aliquam quia
            tenetur sint debitis facilis ipsa totam suscipit rem eius velit
            ducimus.
          </p>
        </div>
      </div>
    </Layout>
  );
}
