"use client"
import Button from "@/components/Button";
import DropdownInput from "@/components/Reusable/DopdownInput/DropdownInput";
import Modal from "@/components/Reusable/Modal/Modal";
import TextArea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TCertificationModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
const CertificationModal:React.FC<TCertificationModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    register,
    errors,
}) => {
    return (
        <Modal
      heading="Add Certificate Details"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >

      <div className="flex flex-col gap-5 mt-5">
      <TextInput
          label="Certificate Name"
          placeholder="eg.,  UI UX Design Certificate"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        <div className="flex items-center gap-5">
        <TextInput
          label="Certificate Link / ID"
          placeholder="Add link here"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
          <TextInput
          label="Certification Date"
          type="date"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        </div>
        
      
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Button variant="natural" className="px-6 py-3">
          Cancel
        </Button>
        <Button type="submit" variant="normal" className="px-6 py-3">
          Add
        </Button>
      </div>
    </Modal>
    );
};

export default CertificationModal;