import type { FC } from 'react';

interface pageProps { }

const LoginPage: FC<pageProps> = ({ }) => {
    return (
        <div className='flex'>
            <h1 className='text-center text-white text-2xl'>Login</h1>
        </div>
    );
}
export default LoginPage;

