import styled from 'styled-components'

const ProfileImg = styled.div`
  width: 100%;
  min-height: 7.5rem;
  margin-bottom: 3.125rem;
  position: relative;
  background: #eb2e3e;
  background: linear-gradient(
    90deg,
    rgba(235, 46, 62, 0.6),
    rgba(249, 180, 45, 0.6)
  );

  img {
    border-radius: 50%;
  }
`

const ProfileName = styled.p`
  width: 100%;
  min-height: 7.5rem;
  margin-bottom: 3.125rem;
  position: relative;
  background: #eb2e3e;
  background: linear-gradient(
    90deg,
    rgba(235, 46, 62, 0.6),
    rgba(249, 180, 45, 0.6)
  );
`

export default ProfileImg
export default ProfileName
