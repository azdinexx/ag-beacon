import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VoiceSVG } from '../../assets/icones/Microphone';
import { PlaySVG } from '../../assets/icones/Play';
import { Audio } from 'expo-av';
import { Pause } from '../../assets/icones/Pause';
import { Cancel } from '../../assets/icones/Cancel';
import { Message } from '../../assets/icones/Message';

function SoundField() {
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [displayTexttoSpeach, setDisplayTexttoSpeach] = useState(false);

  async function startRecording() {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Microphone permission is required to record audio.');
      return;
    }

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    const recordingInstance = new Audio.Recording();
    await recordingInstance.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    await recordingInstance.startAsync();
    setRecording(recordingInstance);
  }

  async function stopRecording() {
    if (recording) {
      await recording.stopAndUnloadAsync();
      const { sound } = await recording.createNewLoadedSoundAsync();
      setSound(sound);
      setRecording(null);
    }
  }

  async function playRecording() {
    if (sound) {
      setPlaying(true);
      await sound.replayAsync();

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setPlaying(false);
        }
      });
    }
  }
  async function stopPlaying() {
    if (sound) {
      await sound.stopAsync();
      setPlaying(false);
    }
  }

  return (
    <View style={styles.containero}>
      <Text style={styles.h1}>Sound Speaker</Text>
      <View style={styles.SoundRecodConatiner}>
        <RecordAndPlay
          startRecording={startRecording}
          stopRecording={stopRecording}
          playRecording={playRecording}
          stopPlaying={stopPlaying}
          thereIsSound={sound ? true : false}
          playing={playing}
        />
        <View
          style={{
            ...styles.line,
            backgroundColor: playing ? '#42a5f5' : '#d3d3d3',
          }}
        ></View>
        <View style={{ flexDirection: 'row' }}>
          {sound && (
            <TouchableOpacity
              onPress={() => {
                setDisplayTexttoSpeach(!displayTexttoSpeach);
              }}
            >
              <Message
                style={{
                  ...styles.svg,
                  color: '#42a5f5',
                }}
              />
            </TouchableOpacity>
          )}
          {sound && (
            <TouchableOpacity style={styles.btn} onPress={() => setSound(null)}>
              <Cancel style={{ ...styles.svg, color: '#3196e9' }} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {displayTexttoSpeach && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#42a5f5',
              fontSize: 16,
            }}
          >
            loading...
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containero: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  h1: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'normal',
    color: '#42a5f5',
  },
  SoundRecodConatiner: {
    padding: 10,
    borderRadius: 13,
    marginRight: 20,
    flexDirection: 'row',
    gap: 5,
    alignContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    gap: 10,
  },
  svg: {
    width: 30,
    height: 30,
    color: 'gray',
  },
  line: {
    flexGrow: 1,
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
});

export default SoundField;

function RecordAndPlay({
  startRecording,
  stopRecording,
  playRecording,
  stopPlaying,
  thereIsSound,
  playing,
}) {
  if (thereIsSound) {
    return playing ? (
      <TouchableOpacity style={styles.btn} onPress={stopPlaying}>
        <Pause style={{ ...styles.svg, color: '#1182df' }} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.btn} onPress={playRecording}>
        <PlaySVG style={{ ...styles.svg, color: '#42a5f5' }} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.btn}
      onPressIn={startRecording}
      onPressOut={stopRecording}
    >
      <VoiceSVG
        style={{
          ...styles.svg,
        }}
      />
    </TouchableOpacity>
  );
}
