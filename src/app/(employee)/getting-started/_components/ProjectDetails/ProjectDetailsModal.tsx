import Button from "@/components/Button";
import Modal from "@/components/Reusable/Modal/Modal";
import TextArea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TProjectDetailsModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const ProjectDetailsModal: React.FC<TProjectDetailsModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    register,
    errors,
}) => {
    return (
        <Modal
        heading="Add project details"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
  
        <div className="flex flex-col gap-5 mt-5">
          <TextInput
            label="Project Title"
            placeholder="eg.,  Online Gaming App"
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
          <TextArea
            label="Project Description"
            placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
            cols={4}
            rows={4}
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
          <div className="flex items-center gap-5">
          <TextInput
            label="Project Link"
            placeholder="eg.,  Link Here"
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
          <TextInput
            label="Date"
            type="text"
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

export default ProjectDetailsModal;