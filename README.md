# SpeechToTextBug

This repo is a minimal reproduction of [RN Issue #36031: iOS speech-to-text entered twice into TextInput](https://github.com/facebook/react-native/issues/36031)

**Description**

Since iOS 16.0, sometimes when I use iOS speech-to-text to input text into a TextInput, the text is entered twice. This does not happen every time, but it is frequent.

**Steps to reproduce**

- Install deps and install this app on a hardware iOS 16.2 device (earlier iOS 16.x releases may have the issue too)
- Tap the text input
- On the iOS keyboard, tap the microphone icon
- Say something
- Tap the microphone icon again when done
- Not every time, but much of the time, the text will be entered twice.

Video of the bug included in the GitHub Issue

## License

MIT
