import { Outlet } from 'react-router-dom';
import PageHeading from '../../components/page-heading/page-heading.component';

import Directory from '../../components/directory/directory.component';


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Japanese Spitz',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
    {
      id: 2,
      title: 'German Shepherd',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
    {
      id: 3,
      title: 'Doberman',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
    {
      id: 4,
      title: 'Bulldog',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
    {
      id: 5,
      title: 'Chihuahua',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
    {
      id: 6,
      title: 'Boerboel',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
    {
      id: 7,
      title: 'Dachshund',
      imageUrl: 'https://i.ibb.co//dog.png',
    },
  ];
  const headings = [
    { title: 'STATE FARM', additionalText: 'So Wholesome.So Bucolic.So Whimsical' },
    // Add more headings as needed
  ];

  return (
    <div>
       <PageHeading headings={headings} />
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
