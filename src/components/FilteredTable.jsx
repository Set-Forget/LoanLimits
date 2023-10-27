import React, { useState, useEffect, useCallback } from "react";
import useAxios from "axios-hooks";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import Spinner from "./Spinner";
import { v4 as uuidv4 } from "uuid";


dayjs.extend(isBetween);

const endPoint =
  "https://script.google.com/macros/s/AKfycbz9VzoAsNQuR9IQjU2lR02MkMyB_Py4yQR5tC-dZwhTRRd1_fQqnhSjNe29jqAb7545/exec";

export default function FilteredTable() {
  const [{ data: dataTypes, loading: typeLoading, error: TypeError }] =
    useAxios(endPoint);
  const [{ data, loading, error }] = useAxios(
    endPoint + "?route=getData"
  );

  if (loading || typeLoading) return <Spinner />;

  return (
    <div className="w-full h-full">


      <div className="bg-center bg-cover flex items-center justify-center w-full" style={{ backgroundImage: "url('https://woodgroupmortgage.com/images/heros/_hero/house-coins-conforming-limits.jpg')" }}>
        <div className="bg-white bg-opacity-50 text-center p-20 rounded-lg">
          <h1 className="text-5xl text-black-800">New Conforming Loan Limits For 2023</h1>
        </div>
      </div>
      <br />
      <br />


      <div className="flex  flex-col items-center">

        <div className="bg-gray-200 p-4 border-l-4 border-orange-500 flex items-center w-7/12 ">
          <p className="text-gray-700">The federal government has increased the limit on conventional mortgages for 2023. Learn more about what this can mean for homebuyers.</p>
        </div>

        <div className="p-4 flex flex-col items-start space-y-4 w-7/12">
          <div>
            <p className="text-gray-700">The Federal Housing Finance Agency (FHFA) sets limits every year...</p>
            <p className="text-gray-700"><strong>The baseline conforming loan limit for 2023 for single-unit...</strong></p>
          </div>
          <img src="https://woodgroupmortgage.com/images/articles/_generalPhotoStandard/loan-house-moneybags.jpg" alt="Loan House Moneybags" />
        </div>

        <p className="p-4 w-6/12">The baseline amounts for the new conforming loan limits for 2023 are as follows:</p>

        <div className="px-4 sm:px-6 lg:px-8 w-9/12 ">
          <div className="mt-8 flow-root">
            <div className="py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-x-auto overflow-y-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg hide-scrollbar">
                <table className="min-w-full divide-y divide-gray-300">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.data.map((person) => (
                      <tr key={uuidv4()}>
                        <td className="whitespace-nowrap py-2 px-2 text-sm font-medium text-gray-900">
                          {person[" 2023 Max Conforming Loan Limits | Winners Guide "]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm font-medium text-gray-900">
                          {person["B"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["C"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["D"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["E"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["F"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["G"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["H"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["I"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["J"]}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["K"]}
                        </td> <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-500">
                          {person["L"]}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <div className="p-4 flex flex-col space-y-4 w-7/12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">What is a conforming loan limit?</h2>
            <br />
            <p className="text-gray-700 mt-2">
              A conforming loan limit is the maximum amount of a mortgage loan that meets the criteria established by Fannie Mae and Freddie Mac for a conventional mortgage, or the FHA’s requirements for certain government-backed loans. Fannie Mae and Freddie Mac are government-sponsored entities (GSEs) that buy mortgage loans from lenders and sell them to investors in a secondary market. This promotes home ownership by providing lenders with additional cash to make more loans.
            </p>
            <br />
            <p className="text-gray-700 mt-2">
              The GSEs take on risk by buying loans from lenders. They set various standards for the loans, such as minimum credit scores, minimum down payments, and maximum debt-to-income ratios (DTIs). The FHFA sets maximum limits on the amounts of those loans. This ensures that Fannie Mae and Freddie Mac do not take on too much risk and have enough cash available to keep the cycle of buying and selling loans in motion.
            </p>
            <br />
            <p className="text-gray-700 mt-2">
              A loan that exceeds the current conforming loan limit is known as a jumbo loan. It is not eligible for purchase by Fannie Mae or Freddie Mac. This makes it a riskier venture for a lender. If a lender is willing to make a jumbo loan at all, it will almost certainly charge more interest, require a larger down payment, and set strict requirements for credit scores and DTIs.
              Read more about the services that Fannie Mae and Freddie Mac provide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">How are conforming loan limits determined?</h3>
            <p className="text-gray-700 mt-2">
              The FHFA determines conforming loan limits based on home prices. Every year, it issues a report on the House Price Index (HPI) based on nationwide data. It uses HPI data from the third quarter of the year to determine the conforming loan limits for the following year. The more home prices increase, the more the following year’s conforming loan limits will rise.
            </p>
          </div>

          <img src="https://woodgroupmortgage.com/images/articles/_generalPhotoStandard/investment-stockbroker-stock-market-analysis-data.jpg" alt="Investment and Stock Market Analysis" className="mt-4 rounded-lg shadow-lg" />

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Is there a different 15-year or 30-year conforming loan limit?</h3>
            <p className="text-gray-700 mt-2">
              The term of a conventional mortgage loan does not affect the limit set by the FHFA. A 15-year mortgage has the same upper limit as a 30-year loan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">When are conforming loan limits announced?</h2>
            <p className="text-gray-700 mt-2">
              Since the FHFA uses third-quarter data to determine the following year’s limits, it is able to announce the new conventional loan limits late in the year. The official announcement of the 2023 conforming loan limits, for example, came out on November 29, 2022.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Conforming Loan Limits in Texas</h2>
            <p className="text-gray-700 mt-2">
              All conforming loan limits in Texas are at the low-cost level, or $726,200 for a single-unit property. No Texas counties meet the criteria for a high-cost area.
            </p>
          </div>

          <img src="https://woodgroupmortgage.com/images/articles/_generalPhotoStandard/bluebonnets-field.jpg" alt="Bluebonnets Field" className="mt-4 rounded-lg shadow-lg" />
        </div>

        <div className="p-4 flex flex-col space-y-4 w-7/12">

          <p className="text-gray-700">Examples of high-cost areas include:</p>

          <ul className="list-disc list-inside pl-5 text-gray-700 space-y-2">
            <li className="list-inside">All Alaska boroughs and census areas</li>
            <li className="list-inside">All Hawaii counties</li>
            <li className="list-inside">The District of Columbia</li>
            <li className="list-inside">Guam</li>
            <li className="list-inside">The U.S. Virgin Islands</li>
            <li className="list-inside">Los Angeles County, California</li>
            <li className="list-inside">San Francisco County, California</li>
            <li className="list-inside">Santa Clara County, California</li>
            <li className="list-inside">Teton County, Idaho</li>
            <li className="list-inside">Prince George’s County, Maryland</li>
            <li className="list-inside">Nantucket County, Massachusetts</li>
            <li className="list-inside">Hudson County, New Jersey</li>
            <li className="list-inside">New York County, New York</li>
            <li className="list-inside">Westchester County, New York</li>
            <li className="list-inside">Pike County, Pennsylvania</li>
            <li className="list-inside">Arlington County, Virginia</li>
            <li className="list-inside">King County, Washington</li>
            <li className="list-inside">Jefferson County, Wyoming</li>
          </ul>

          <p className="text-gray-700">
            The FHFA’s website features a map that shows the conforming loan limits in each county and county equivalent throughout the country.
          </p>

        </div>

        <div className="p-4 flex flex-col space-y-4 w-7/12">

          <h2 className="text-2xl font-bold">What does the conforming loan limit increase mean for homebuyers?</h2>
          <p className="text-gray-700">
            A conforming loan limit increase gives homebuyers more options. Suppose, for example, that it is November 2022, and a buyer has fallen in love with a particular home. The home price is $700,000, which is greater than the 2022 conforming loan limit of $647,200. The buyer might have no other option but to seek a jumbo loan with stricter requirements and a higher interest rate.
          </p>
          <p className="text-gray-700">
            If the seller is willing to wait until January 2023, though, the buyer’s options will increase. The conforming loan limit has increased to $726,200.
          </p>
          <p className="text-gray-700">
            The seller’s price is now less than the conforming loan limit for a single-unit property. The buyer can obtain a conventional mortgage with easier qualifications and — when compared to jumbo mortgages — better interest rates!
          </p>

          <h2 className="text-2xl font-bold">Are you an eligible homebuyer?</h2>
          <p className="text-gray-700">
            The dream of home ownership is within reach for thousands — perhaps millions — of Americans thanks in part to safeguards established by entities like Fannie Mae, Freddie Mac, and the FHFA.
          </p>
          <p className="text-gray-700">
            The right mortgage for your unique circumstances could be out there. You might just need a little help to find it. The home mortgage professionals at The Wood Group of Fairway are here to answer your questions, address your concerns, and discuss your options. Get started on your free pre-approval today!
          </p>

        </div>

      </div>

    </div >
  );
}

