import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import usePosts from '@/hooks/usePosts';

import Button from '@/components/Button';

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post('/api/posts', { body });

      toast.success('Post created!');

      setBody('');
      mutatePosts();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts]);

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {currentUser ? (
        <div></div>) : (
      <div className="py-8">
        <h1 className="mb-4 text-2xl font-bold text-center text-white">
          welcome to the social app
        </h1>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Button label='Login' onClick={loginModal.onOpen} />
          <Button label='Register' onClick={registerModal.onOpen} secondary />
        </div>
      </div>
      )}
    </div>
  );
};

export default Form;