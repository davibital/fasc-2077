import { useRef } from "react";

export const FileInput = ({
  label,
  name,
  imageState: [image, setImage],
  className,
}) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label
      key={label}
      className={`flex flex-col gap-2 self-center items-center ${className}`}
    >
      {label}
      <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">+</span>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name={name}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </label>
  );
};
