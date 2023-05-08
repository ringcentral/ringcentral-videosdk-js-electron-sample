import {
  RcvEngineProvider,
  ActionBar,
  AudioAction,
  ChatAction,
  LeaveAction,
  LogoIcon,
  MeetingInfoAction,
  ParticipantAction,
  RecordAction,
  VideoAction,
  GalleryLayout,
  GalleryLayoutType,
  ScreenSharingAction,
  MoreAction,
  InviteAction
} from '@ringcentral/video-sdk-react'
import useMode, { Mode } from '../context/mode'

const InMeeting = ({ rcvEngine }) => {
  const { mode } = useMode()

  const getMeetingLink = (meetingInfo) => {
    return `http://my.demo.com/${meetingInfo.meetingId}`
  }

  const galleryCenterActions = [
    <AudioAction isShowLabel={true} key={'audio-action'} />,
    <VideoAction isShowLabel={true} key={'video-action'} />,
    <ScreenSharingAction isShowLabel={true} key={'screen-sharing-action'} />,
    <ParticipantAction isShowLabel={true} key={'participant-action'} />,
    <InviteAction
      isShowLabel={true}
      key={'invite-action'}
      renderMeetingLink={getMeetingLink}
      onCopyToClipboardSuccess={(message) => {
        console.log('copy to clipboard success', message)
      }}
    />,
    <MoreAction
      isShowLabel={true}
      key={'more-action'}
      moreActions={[
        <ChatAction isShowLabel={true} key={'chat-action'} />,
        <RecordAction isShowLabel={true} key={'record-action'} />
      ]}
    />,
    <LeaveAction key={'leave-action'} />
  ]

  const floatCenterActions = [
    <AudioAction isShowLabel={true} key={'audio-action'} />,
    <VideoAction isShowLabel={true} key={'video-action'} />
  ]

  return (
    <div className={'meeting-container'}>
      <RcvEngineProvider rcvEngine={rcvEngine}>
        <GalleryLayout
          layout={GalleryLayoutType.gallery}
          style={{
            flex: 1
          }}
        />
        <ActionBar
          leftActions={[
            <MeetingInfoAction key={'meeting-info-action'} renderMeetingLink={getMeetingLink} />
          ]}
          centerActions={mode === Mode.gallery ? galleryCenterActions : floatCenterActions}
          rightActions={[<LogoIcon key={'logo-icon'} text="My Demo" />]}
        />
      </RcvEngineProvider>
    </div>
  )
}

export default InMeeting
