from vosk import Model, KaldiRecognizer
import json
import time

import pyaudio

model = Model(r"C:\Repo\STT\vosk-model-en-in-0.5")
rec = KaldiRecognizer(model, 16000)

def listen():
    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16, channels=1,
                    rate=16000, input=True, frames_per_buffer=8000)
    stream.start_stream()
    text = 'blank'

    i=int(time.time())+5
    while(time.time()<=i):
        data = stream.read(4000)
        if len(data) == 0:
            print("no input")
            break
        if rec.AcceptWaveform(data):
            print('rec')
            jres = json.loads(rec.Result())
            text = jres['text']
            print(text)
            return text