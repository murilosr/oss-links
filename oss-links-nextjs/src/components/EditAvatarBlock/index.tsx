import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import EditBlock from 'src/components/EditBlock';
import { IEditAvatarBlock, IEditBlockTypes } from 'src/types';


export default function EditAvatarBlock(props: {
    data: IEditAvatarBlock,
    updateBlock: (block: IEditBlockTypes) => void
}) {

    const { data, updateBlock } = props;

    return (
        <EditBlock icon={<AccountCircleIcon />} id={data.id}>
            <div className='flex justify-center'>
                <Avatar src={data.src}
                    alt="Avatar"
                    sx={{ width: 64, height: 64 }}
                />
            </div>
        </EditBlock>
    );
}