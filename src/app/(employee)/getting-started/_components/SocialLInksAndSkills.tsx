// SocialLinksSkills.jsx
import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

const SocialLinksSkills = ({ formData, setFormData, handleContinue }) => {
  const handleSocialLinkChange = (index, platform, value) => {
    // Update specific social link field in formData
    const updatedLinks = formData.socialLinks.map((link, i) =>
      i === index ? { ...link, [platform]: value } : link
    );
    setFormData({ ...formData, socialLinks: updatedLinks });
  };

  const handleSkillsChange = (e) => {
    // Update skills array in formData
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    setFormData({ ...formData, skills: skillsArray });
  };

  return (
    <div>
      <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl pr-4">
        <span>Social Links & Skills</span>
      </div>
      <div className="flex flex-col">
        {formData.socialLinks.map((link, index) => (
          <div key={index} className="flex flex-col gap-2">
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
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="skills">Skills</label>
          <Input
            id="skills"
            type="text"
            placeholder="eg., Design, Adobe, Figma, etc."
            value={formData.skills.join(', ')}
            onChange={handleSkillsChange}
          />
          <span className="text-sm mt-4">Enter comma separated values*</span>
        </div>
      </div>
      <div className="flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5">
        <Button variant="primary" type="submit" className="max-md:w-[230px] max-lg:w-[400px]" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SocialLinksSkills;
