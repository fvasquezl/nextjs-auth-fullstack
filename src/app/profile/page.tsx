import type { FC } from 'react';

interface pageProps {}


const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
    </div>
  );
};
export default page;