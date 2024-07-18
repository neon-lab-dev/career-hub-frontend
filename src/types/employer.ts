export interface IEmployer {
  company_avatar: {
    public_id: string;
    url: string;
    thumbnailUrl: string;
  };
  verified: boolean;
  createdAt: string;
  _id: string;
  full_name: string;
  email: string;
  mobilenumber: number;
  otp: null;
  otp_expiry: null;
  address: [
    {
      _id: string;
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    }
  ];
  companyDetails: [
    {
      soicalLink: {
        linkedin: string;
        github: string;
      };
      _id: string;
      companyName: string;
      industryType: string;
      websiteLink: string;
      contactEmail: string;
      contactPhone: number;
      companyLocation: string;
      bio: string;
    }
  ];
  __v: number;
}
