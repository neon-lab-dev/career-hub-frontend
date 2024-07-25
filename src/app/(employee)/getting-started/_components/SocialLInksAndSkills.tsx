import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

// Define types for formData
interface SocialLink {
  linkedin: string;
  github: string;
}

interface FormData {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  education: any[];
  projects: any[];
  experience: any[];
  certifications: any[];
  skills: string[];
  socialLinks: {
    linkedin: string;
    github: string;
  }[];
  interests: string[];
}

// Define types for component props
interface SocialLinksSkillsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleContinue: (e:any) => void;
}

const SocialLinksSkills: React.FC<SocialLinksSkillsProps> = ({ formData, setFormData, handleContinue }) => {
  const handleSocialLinkChange = (index: number, platform: keyof SocialLink, value: string) => {
    const updatedLinks = formData.socialLinks.map((link, i) =>
      i === index ? { ...link, [platform]: value } : link
    );
    setFormData({ ...formData, socialLinks: updatedLinks });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    setFormData({ ...formData, skills: skillsArray });
  };

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const interestsArray = e.target.value.split(',').map(interest => interest.trim());
    setFormData({ ...formData, interests: interestsArray });
  };

  return (
    <div>
      <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl pr-4">
        <span>Social Links, Skills & Interests</span>
      </div>
      <div className="flex flex-col">
        {formData.socialLinks.map((link, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            <label htmlFor={`linkedin-${index}`}>LinkedIn</label>
            <Input
              id={`linkedin-${index}`}
              type="text"
              placeholder="LinkedIn Profile"
              value={link.linkedin}
              onChange={(e) => handleSocialLinkChange(index, 'linkedin', e.target.value)}
            />
            <label htmlFor={`github-${index}`}>GitHub</label>
            <Input
              id={`github-${index}`}
              type="text"
              placeholder="GitHub Profile"
              value={link.github}
              onChange={(e) => handleSocialLinkChange(index, 'github', e.target.value)}
            />
          </div>
        ))}
        <label htmlFor="skills">Skills</label>
        <Input
          id="skills"
          type="text"
          placeholder="Enter skills separated by commas"
          value={formData.skills.join(', ')}
          onChange={handleSkillsChange}
        />
        <label htmlFor="interests">Interests</label>
        <Input
          id="interests"
          type="text"
          placeholder="Enter interests separated by commas"
          value={formData.interests.join(', ')}  // Add a fallback to an empty array
          onChange={handleInterestsChange}
        />
      </div>
      <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
        <Button
          variant="primary"
          type="button"
          className='max-md:w-[230px] max-lg:w-[400px]'
          onClick={handleContinue}
          disabled={formData.skills.length === 0 || !formData.socialLinks[0].linkedin || !formData.socialLinks[0].github} // Disable if no skills or social links
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SocialLinksSkills;
