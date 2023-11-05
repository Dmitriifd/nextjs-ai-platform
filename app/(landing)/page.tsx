import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div>
      LandingPage
      <div className='flex gap-4'>
        <Link href='/sign-in'>
          <Button variant='destructive'>Login</Button>
        </Link>
        <Link href='/sign-up'>
          <Button variant='destructive'>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
