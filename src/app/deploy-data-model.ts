export interface DeployData {
   project: string;
   deployEvn: string;
   tagName: string;
   commit: {
      id: string;
      branch: string;
      branchURL: string;
      commitURL: string;
   };
}
