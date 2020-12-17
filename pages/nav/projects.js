import Card from '../../components/Card';
import Layout from '../../components/Layout';

export default function Projects() {
  return (
    <div className="min-h-full">
      <Layout title="Projects">
        <h1 className=" text-4xl font-bold sm:text-4xl">My Portfolio</h1>
        <section className="flex flex-wrap items-center justify-center h-full">
          <Card src="https://picsum.photos/seed/picsum/450/300">
            <p>To-do list</p>
          </Card>
          <Card src="https://picsum.photos/seed/picsum/450/300">
            <p>Weather App</p>
          </Card>
          <Card src="https://picsum.photos/seed/picsum/450/300">
            <p>Calculator</p>
          </Card>
          <Card src="https://picsum.photos/seed/picsum/450/300">
            <p>To-do list SPA</p>
          </Card>
        </section>
      </Layout>
    </div>
  );
}
