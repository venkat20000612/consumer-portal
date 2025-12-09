import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import forumImg from "../assets/forum-top-img.png";
import forumImg2 from "../assets/forum-middle-img.jpg";
import forumImg3 from "../assets/forum-second-img.png";
import { AiOutlineHeart, AiOutlineComment, AiOutlinePushpin } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import Modal from "react-modal";
import { FiX, FiUpload, FiImage, FiPaperclip } from "react-icons/fi";

Modal.setAppElement("#root");



const Forum = () => {

const [modalOpen, setModalOpen] = useState(false);
const [question, setQuestion] = useState("");
const [error, setError] = useState("");

  return (
    <>
      <Navbar />

      
      <div className="w-full bg-[#e7f0da] py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Find Discussions Related To Ayurveda Here
        </h2>
      </div>

      {/* Forum Card section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mt-10 border">

      
        <div className="flex justify-center border-b pb-3 mb-3 gap-10 text-sm md:text-base font-medium">
          <span className="text-green-700 border-b-2 border-green-700 pb-1 cursor-pointer">
            Questions
          </span>
          <span className="text-gray-500 cursor-pointer">Thoughts</span>
        </div>

        
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3">
            <img
              src={forumImg}
              className="w-9 h-9 rounded-full"
            />
            <p className="text-sm font-medium">Priya Singh</p>
          </div>

          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md text-xs hover:bg-green-800"
            onClick={() => setModalOpen(true)}
            >
            Ask Question
            </button>

        </div>

       {/* Modal form */}
    <Modal
    isOpen={modalOpen}
    onRequestClose={() => setModalOpen(false)}
    className="bg-white rounded-xl shadow-xl p-6 md:w-[500px] mx-auto mt-20 outline-none"
    overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start md:items-center px-4"
    >
    <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-700">Ask Question</h3>
        <FiX className="text-2xl cursor-pointer" onClick={() => setModalOpen(false)} />
    </div>

    
    <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
        <img src={forumImg} className="w-9 h-9 rounded-full" alt="user-image" />
        <p className="text-sm font-medium">Priya Singh</p>
        </div>

        <button
        onClick={() => {
            if (!question.trim()) {
            setError("Question is required!");
            return;
            }
            alert("Question Submitted Successfully!");
            setQuestion("");
            setError("");
            setModalOpen(false);
        }}
        className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium text-sm"
        >
        Ask
        </button>
    </div>

    
    <label className="text-xs font-medium text-gray-700">Add Question *</label>
    <textarea
        className="border rounded-md w-full p-2 mt-1 text-sm"
        rows={3}
        placeholder="Ask your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
    ></textarea>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

    
    <label className="text-xs font-medium mt-4 text-gray-700 block">
        Attachments
    </label>
    <div className="flex items-center border rounded-md p-2 mt-1 gap-3">
        <input type="file" className="w-full text-xs" />
        <FiImage className="text-xl text-green-700 cursor-pointer" />
        <FiUpload className="text-xl text-green-700 cursor-pointer" />
        <FiPaperclip className="text-xl text-green-700 cursor-pointer" />
    </div>

    <button className="mt-5 text-green-700 text-sm flex items-center gap-1">
        + Add Description
    </button>
    </Modal>


        {/* Question Cards display */}
        <div className="border rounded-lg p-4">
      
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                <img
                src={forumImg3}
                className="w-8 h-8 rounded-full"
              />
              </div>
              <p className="text-xs text-gray-600">Anonymous · 5 days ago</p>
            </div>
            <span className="font-bold text-gray-700">⋮</span>
          </div>

          
          <h4 className="text-sm font-semibold mb-2">
            Question: Can Ayurveda help with stress and mental health issues?
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            Explores the potential benefits of traditional Ayurvedic practices in
            managing stress and improving mental well-being...
          </p>

          
          <div className="flex justify-between mt-3 text-xs text-gray-600">
            <span>Replies • 10 reply</span>
            <span className="text-green-700 cursor-pointer">
              View All 9 Replies
            </span>
          </div>

          
          <div className="bg-[#eaf6df] p-4 rounded-lg mt-4">
            <div className="flex gap-3 mb-2">
              <img
                src={forumImg2}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-xs font-semibold">Dr. Mathew Adams</p>
                <p className="text-[10px] text-gray-500">5 days ago</p>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed">
              Ayurveda offers holistic approaches like herbal remedies, lifestyle
              adjustments, and relaxation techniques to alleviate stress and support
              mental well-being…
            </p>

           
        <div className="flex gap-5 mt-3 text-xs text-gray-600">
        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineHeart className="text-base" /> 2
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineComment className="text-base" /> 2
        </span>
        </div>

          </div>

          
        <div className="flex gap-6 text-xs mt-4 text-gray-600 items-center">
        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineHeart className="text-lg" /> 23 Likes
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineComment className="text-lg" /> 10 Reply
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlinePushpin className="text-lg" /> 3 Saves
        </span>
        </div>

        </div>



        {/* Question Cards display */}
        <div className="border rounded-lg p-4">
      
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                <img
                src={forumImg3}
                className="w-8 h-8 rounded-full"
              />
              </div>
              <p className="text-xs text-gray-600">Anonymous · 5 days ago</p>
            </div>
            <span className="font-bold text-gray-700">⋮</span>
          </div>

          
          <h4 className="text-sm font-semibold mb-2">
            Question: Can Ayurveda help with stress and mental health issues?
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            Explores the potential benefits of traditional Ayurvedic practices in
            managing stress and improving mental well-being...
          </p>

          
          <div className="flex justify-between mt-3 text-xs text-gray-600">
            <span>Replies • 10 reply</span>
            <span className="text-green-700 cursor-pointer">
              View All 9 Replies
            </span>
          </div>

          
          <div className="bg-[#eaf6df] p-4 rounded-lg mt-4">
            <div className="flex gap-3 mb-2">
              <img
                src={forumImg2}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-xs font-semibold">Dr. Mathew Adams</p>
                <p className="text-[10px] text-gray-500">5 days ago</p>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed">
              Ayurveda offers holistic approaches like herbal remedies, lifestyle
              adjustments, and relaxation techniques to alleviate stress and support
              mental well-being…
            </p>

           
        <div className="flex gap-5 mt-3 text-xs text-gray-600">
        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineHeart className="text-base" /> 2
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineComment className="text-base" /> 2
        </span>
        </div>

          </div>

          
        <div className="flex gap-6 text-xs mt-4 text-gray-600 items-center">
        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineHeart className="text-lg" /> 23 Likes
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineComment className="text-lg" /> 10 Reply
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlinePushpin className="text-lg" /> 3 Saves
        </span>
        </div>

        </div>




        {/* Question Cards display */}
        <div className="border rounded-lg p-4">
      
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                <img
                src={forumImg3}
                className="w-8 h-8 rounded-full"
              />
              </div>
              <p className="text-xs text-gray-600">Anonymous · 5 days ago</p>
            </div>
            <span className="font-bold text-gray-700">⋮</span>
          </div>

          
          <h4 className="text-sm font-semibold mb-2">
            Question: Can Ayurveda help with stress and mental health issues?
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            Explores the potential benefits of traditional Ayurvedic practices in
            managing stress and improving mental well-being...
          </p>

          
          <div className="flex justify-between mt-3 text-xs text-gray-600">
            <span>Replies • 10 reply</span>
            <span className="text-green-700 cursor-pointer">
              View All 9 Replies
            </span>
          </div>

          
          <div className="bg-[#eaf6df] p-4 rounded-lg mt-4">
            <div className="flex gap-3 mb-2">
              <img
                src={forumImg2}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-xs font-semibold">Dr. Mathew Adams</p>
                <p className="text-[10px] text-gray-500">5 days ago</p>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed">
              Ayurveda offers holistic approaches like herbal remedies, lifestyle
              adjustments, and relaxation techniques to alleviate stress and support
              mental well-being…
            </p>

           
        <div className="flex gap-5 mt-3 text-xs text-gray-600">
        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineHeart className="text-base" /> 2
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineComment className="text-base" /> 2
        </span>
        </div>

          </div>

          
        <div className="flex gap-6 text-xs mt-4 text-gray-600 items-center">
        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineHeart className="text-lg" /> 23 Likes
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlineComment className="text-lg" /> 10 Reply
        </span>

        <span className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <AiOutlinePushpin className="text-lg" /> 3 Saves
        </span>
        </div>

        </div>

      </div>

    
<div className="text-center py-10">
  <button className="flex items-center gap-2 text-gray-700 font-medium mx-auto hover:text-green-700 transition">
    Load More
    <FiChevronDown className="text-lg" />
  </button>
</div>


      <Footer />
    </>
  );
};

export default Forum;
