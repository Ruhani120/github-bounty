"use client"

import React from 'react'


const loggedInUserId = 101;

const allSubmissions = [
  {
    id: 1,
    user: { id: 101, name: "Daksh", email: "daksh@example.com" },
    issue: {
      id: 456,
      githubIssueId: "#456",
      title: "Implement new feature",
      repo: "mlsc-tiet/feature-branch",
      points: 50,
    },
    submissionLink: "https://github.com/user/pr_link",
    status: "In Review",
    pointsEarned: 50,
    submittedAt: "2025-07-12",
  },
  {
    id: 2,
    user: { id: 102, name: "Aryan", email: "aryan@example.com" },
    issue: {
      id: 789,
      githubIssueId: "#789",
      title: "Refactor code",
      repo: "mlsc-tiet/refactor-project",
      points: 75,
    },
    submissionLink: "https://github.com/user/pr_link2",
    status: "Closed",
    pointsEarned: 75,
    submittedAt: "2025-07-10",
  },
  {
    id: 3,
    user: { id: 101, name: "Daksh", email: "daksh@example.com" },
    issue: {
      id: 101,
      githubIssueId: "#101",
      title: "Fix bug",
      repo: "mlsc-tiet/bug-fixes",
      points: 25,
    },
    submissionLink: "https://github.com/user/pr_link3",
    status: "Open",
    pointsEarned: 0,
    submittedAt: "2025-07-09",
  },
];

const statusColors = {
  Open: "bg-green-600",
  "In Review": "bg-yellow-500",
  Closed: "bg-gray-700",
};


const Submission_History = () => {

  const userSubmissions = allSubmissions.filter(
    (submission) => submission.user.id === loggedInUserId
  );

  return (
    <>
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Submissions</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4">Issue</th>
              <th className="text-left p-4">Repository</th>
              <th className="text-left p-4">Points</th>
              <th className="text-left p-4">Submission</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {userSubmissions.map((submission) => (
              <tr key={submission.id} className="border-b border-gray-800">
                <td className="p-4 font-medium">
                  {submission.issue.githubIssueId}: {submission.issue.title}
                </td>
                <td className="p-4 text-blue-400">
                  {submission.issue.repo}
                </td>
                <td className="p-4">{submission.pointsEarned}</td>
                <td className="p-4">
                  <a
                    href={submission.submissionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    PR Link
                  </a>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[submission.status]}`}
                  >
                    {submission.status}
                  </span>
                </td>
                <td className="p-4">
                  {submission.submittedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {userSubmissions.length === 0 && (
          <p className="text-gray-400 p-4">No submissions yet.</p>
        )}
      </div>
    </div>
    </>
  )
}

export default Submission_History
