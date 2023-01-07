import Avatar from '@mui/material/Avatar';
import { IEditAvatarBlock } from 'src/types';

export default function RenderAvatarBlock(props: { data: IEditAvatarBlock }) {

    const { data } = props;

    return (
        <div className='flex justify-center w-full'>
            <Avatar src={data.src}
                alt="Avatar"
                sx={{ width: 64, height: 64 }}
            />
        </div>
    );
}