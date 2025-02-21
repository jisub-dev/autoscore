from flask import Flask, request, jsonify
import librosa
import numpy as np
from music21 import *

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_audio():
    try:
        # 오디오 파일 경로
        audio_path = request.json['file_path']

        # librosa를 사용하여 오디오 파일 로드
        y, sr = librosa.load(audio_path)

        # 피치 추출
        pitches, magnitudes = librosa.piptrack(y=y, sr=sr)

        # 시간-주파수 변환
        notes = []
        for time_idx in range(0, pitches.shape[1], 10):  # 10프레임마다 샘플링
            pitch_idx = magnitudes[:, time_idx].argmax()
            pitch = pitches[pitch_idx, time_idx]
            if pitch > 0:
                note = librosa.hz_to_note(pitch)
                notes.append(note)

        return jsonify({
            'status': 'success',
            'notes': notes
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)