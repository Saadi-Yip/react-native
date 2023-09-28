export default function SocialLoginButtons({ onSocialLogin, socialIcons }) {
    return (
      <div className="flex justify-center mt-4">
        {socialIcons.map((icon, index) => (
          <button
            key={index}
            onClick={() => onSocialLogin(icon.provider)}
            className={`p-2 rounded-full mx-2 ${icon.colorClass}`}
          >
            {icon.icon}
          </button>
        ))}
      </div>
    );
  }