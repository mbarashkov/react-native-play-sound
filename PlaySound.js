import {
  Platform,
  NativeModules,
} from 'react-native';

const { SoundModule } = NativeModules;
const nativeModules = require('react-native').NativeModules;

module.exports = {
  PlaySound : PlaySound = sound => {
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.playSound(sound)
      : NativeModules.SoundManager.playSound(sound)
  },
  StopSound : StopSound = () => {
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.stopSound()
      : NativeModules.SoundManager.stopSound()
  },
  PauseSound : PauseSound = () => {
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.pauseSound()
      : NativeModules.SoundManager.pauseSound()
  },
  ResumeSound : ResumeSound = () => {
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.resumeSound()
      : NativeModules.SoundManager.resumeSound()
  },
  PlaySoundRepeat : PlaySoundRepeat = sound => {
  Platform.OS === 'ios'
    ? nativeModules.SoundModule.playSoundRepeat(sound)
    : NativeModules.SoundManager.playSoundRepeat(sound)
  },
  PlaySoundMusicVolume : PlaySoundMusicVolume = value => {
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.playSoundMusicVolume(value)
      : NativeModules.SoundManager.playSoundMusicVolume(value, value)
  }
};
