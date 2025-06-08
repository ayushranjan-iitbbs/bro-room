import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/CallContext';

const NewMeeting = () => {
  const {
    me,
    callAccepted,
    callEnded,
    name,
    setName,
    callUser,
    leaveCall,
    answerCall,
    myVideo,
    userVideo,
    stream,
    call,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-purple-400 mb-10">
        🚀 Start a New Meeting
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl justify-center items-center">
        {stream && (
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-2 text-center">🎥 Your Video</h2>
            <div className="border-4 border-purple-500 rounded-xl overflow-hidden shadow-lg">
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        )}

        {callAccepted && !callEnded && (
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-2 text-center">📡 Remote Video</h2>
            <div className="border-4 border-purple-500 rounded-xl overflow-hidden shadow-lg">
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="mt-12 w-full max-w-3xl space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="👤 Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 border border-purple-500 placeholder:text-gray-400"
          />
          <button
            onClick={() => navigator.clipboard.writeText(me)}
            className="w-full sm:w-auto px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition"
          >
            📋 Copy Your Call ID
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="📞 Enter ID to Call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 border border-purple-500 placeholder:text-gray-400"
          />
          {callAccepted && !callEnded ? (
            <button
              onClick={leaveCall}
              className="w-full sm:w-auto px-4 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium transition"
            >
              ❌ Leave Call
            </button>
          ) : (
            <button
              onClick={() => callUser(idToCall)}
              className="w-full sm:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition disabled:opacity-50"
              disabled={!me || !stream}
            >
              📲 Call
            </button>
          )}
        </div>

        {/* Incoming Call */}
        {call.isReceivingCall && !callAccepted && (
          <div className="mt-6 bg-gray-800 p-5 rounded-lg border-l-4 border-green-500 shadow-lg text-center">
            <h2 className="text-xl mb-3 font-semibold">
              📞 {call.name || 'Someone'} is calling you...
            </h2>
            <button
              onClick={answerCall}
              className="px-5 py-3 bg-green-600 hover:bg-green-700 rounded-md font-medium transition"
            >
              ✅ Answer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewMeeting;
