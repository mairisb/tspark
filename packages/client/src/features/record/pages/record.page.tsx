import { Button, List, ListItem, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc';
import { Page } from '../../../app/pages/page';

const getMicDevices = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaDevices = await navigator.mediaDevices.enumerateDevices();
  const micDevices = mediaDevices.filter(
    (device) => device.kind === 'audioinput',
  );
  stream.getAudioTracks().forEach((track) => {
    track.stop();
  });
  return micDevices;
};

const recordStream = async (stream: MediaStream) => {
  let recorder = new RecordRTCPromisesHandler(stream, {
    type: 'video',
  });
  recorder.startRecording();

  const sleep = (m: any) => new Promise((r) => setTimeout(r, m));
  await sleep(10000);

  await recorder.stopRecording();
  let blob = await recorder.getBlob();
  invokeSaveAsDialog(blob);
};

export const RecordPage: React.FC = observer(() => {
  const [micDevices, setMicDevices] = useState<MediaDeviceInfo[]>([]);
  const [streams, setStreams] = useState<MediaStream[]>([]);

  useEffect(() => {
    getMicDevices().then(setMicDevices);
  }, []);

  return (
    <Page title="Record">
      <Stack spacing={2}>
        <div>
          <Typography>Microphones:</Typography>
          <List>
            {micDevices.map((micDevice) => (
              <ListItem
                key={micDevice.deviceId}
                onClick={async () => {
                  const stream = await navigator.mediaDevices.getUserMedia({
                    audio: { deviceId: { exact: micDevice.deviceId } },
                  });
                  setStreams([...streams, stream]);
                }}
              >
                {`${micDevice.label || micDevice.deviceId}`}
              </ListItem>
            ))}
          </List>
        </div>

        <Button
          variant="contained"
          onClick={() => {
            console.log(streams);
          }}
        >
          TEST
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            // streams.forEach((stream) => {
            //   const tracks = stream.getAudioTracks();
            //   tracks.forEach((track) => track.stop());
            // });
            // setStreams([]);

            if (streams.length) {
              const tracks = streams[0].getAudioTracks();
              tracks.forEach((track) => track.stop());

              const [_, ...streamsMinusOne] = streams;
              setStreams(streamsMinusOne);
            }
          }}
        >
          TEST2
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            streams.forEach((stream) => {
              recordStream(stream);
            });
          }}
        >
          TEST2
        </Button>
      </Stack>
    </Page>
  );
});
