// components/CommentSection.tsx

import React from "react";

type Review = {
    id: number;
    author: string;
    rating: number;
    comment: string;
};

type CommentSectionProps = {
    reviews: Review[];
};

const CommentSection: React.FC<CommentSectionProps> = ({ reviews }) => {
    // Calculate average rating
    const averageRating =
        reviews.length > 0
            ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
            : 0;

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            {reviews.length > 0 ? (
                <>
                    {/* Average Rating */}
                    <div className="flex items-center mb-6">
                        <span className="text-lg font-bold mr-2">{averageRating.toFixed(1)}</span>
                        <div className="flex">
                            {Array.from({ length: 5 }, (_, index) => (
                                <svg
                                    key={index}
                                    className={`w-5 h-5 ${
                                        index < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.52 9.393c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.966z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600 ml-2">({reviews.length} reviews)</span>
                    </div>

                    {/* Reviews List */}
                    {reviews.map((review) => (
                        <div key={review.id} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold mr-2">{review.author}</span>
                                <div className="flex">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-4 h-4 ${
                                                index < review.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.52 9.393c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.966z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </>
            ) : (
                <p className="text-gray-600">No reviews yet.</p>
            )}
        </div>
    );
};

export default CommentSection;
