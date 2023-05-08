import useUsers from '@/hooks/useUsers';
import Avatar from '../Avatar';

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }
  
  return (
    <div className="hidden px-6 py-4 lg:block">
      <div className="p-4 bg-neutral-800 rounded-xl mt-[8rem]">
        <h2 className="text-xl font-semibold text-white">
          TODO: Other users or random posts
        </h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className='flex flex-row gap-4'>
              <Avatar userId= {user.id} />
              <div className='flex flex-col'>
                <p className='text-sm font-semibold text-white'>{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
