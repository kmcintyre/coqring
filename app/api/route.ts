//import { ethers } from "hardhat";
import type { NextApiRequest, NextApiResponse } from 'next'


export async function GET(req: NextApiRequest, res: NextApiResponse) {

  //if (req.method === 'POST') {
    //ethers.deployContract("Dumb").then((res) => {
        //await dumb.waitForDeployment();
    //});
    
  
    // Process a POST request
  //} else {
    // Handle any other HTTP method
  //}
  res.status(200).json({ message: 'Hello from Next.js!' })
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {

  //if (req.method === 'POST') {
    //ethers.deployContract("Dumb").then((res) => {
        //await dumb.waitForDeployment();
    //});
    
  
    // Process a POST request
  //} else {
    // Handle any other HTTP method
  //}
  return Response.json({ message: 'Hello from Next.js!' })
}