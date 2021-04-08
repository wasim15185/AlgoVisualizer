import React from "react";
import { Modal } from "antd";
import VideoPlayer from "react-video-js-player";

function VideoModal({ isVisible, setVisible, videoUrl }) {
	return (
		<Modal
			title="Demo"
			visible={isVisible}
			onCancel={() => {
				setVisible(false);
			}}
			style={{
				top: 30,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			footer={null}
		>
			<VideoPlayer src={videoUrl} width="720" height="340" />
		</Modal>
	);
}

export default VideoModal;
