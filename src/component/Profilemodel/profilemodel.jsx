/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Modal, useMantineTheme } from '@mantine/core';
import './profilemodel.css';
function ProfileModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.5}
      overlayBlur={2}
      size="50%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}>
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input type="text" className="infoI" name="fullname" placeholder="Full name" />
          <input type="text" className="infoI" name="email" placeholder="Email address" />
        </div>

        <div>
          <input type="text" className="infoI" name="lives" placeholder="Lives in" />
          <input type="text" className="infoI" name="works" placeholder="works at" />
        </div>
        <div>
          Profile Image
          <input type="file" name="prfileImage" />
          Cover Image
          <input type="file" name="coverImage" />
        </div>
      </form>
    </Modal>
  );
}
export default ProfileModel;
